package ru.slitigor.energetic.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.slitigor.energetic.model.District;
import ru.slitigor.energetic.model.Substation;
import ru.slitigor.energetic.repository.SubstationRepository;
import ru.slitigor.energetic.service.DistrictService;
import ru.slitigor.energetic.service.SubstationService;
import ru.slitigor.energetic.utils.ItemAlreadyExistsException;
import ru.slitigor.energetic.utils.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SubstationServiceImpl implements SubstationService {
    private final SubstationRepository repository;
    private final DistrictService districtService;

    @Override
    public Substation getSubstationByName(String name) {
        return repository.findByName(name).orElseThrow(() ->
                new ResourceNotFoundException("Substation", "name", name));
    }

    @Override
    public List<Substation> getAllSubstation() {
        return repository.findAll();
    }

    @Override
    @Transactional
    public Substation createSubstation(Substation substation) {
        Optional<Substation> existsSubstation = repository.findByName(substation.getName());
        if (existsSubstation.isPresent()) throw new ItemAlreadyExistsException(String.format(
                "The Substation named '%s' already exists in the database!", substation.getName()
        ));
        Substation substationToCreated = updateLinkDistrict(substation);

        return repository.save(substationToCreated);
    }

    @Override
    @Transactional
    public Substation updateSubstation(String name, Substation substation) {
        Optional<Substation> existsSubstation = repository.findByName(name);
        if (existsSubstation.isEmpty()) throw new ResourceNotFoundException("Substation", "Name", name);
        Substation substationToUpdated = existsSubstation.get();
        substationToUpdated.setPsSchema(substation.getPsSchema());
        substationToUpdated.setDistrict(substation.getDistrict());

        return repository.save(updateLinkDistrict(substationToUpdated));
    }

    @Override
    public void deleteSubstation(String name) {
        Substation substation = getSubstationByName(name);
        District district = districtService.getDistrictByName(substation.getDistrict().getName());
        district.getSubstations().remove(substation);
        repository.delete(substation);
    }

    private Substation updateLinkDistrict(Substation substation) {
        District district = districtService.getDistrictByName(substation.getDistrict().getName());
        substation.setDistrict(district);
        if (!district.getSubstations().contains(substation))
            district.getSubstations().add(substation);

        return substation;
    }
}
