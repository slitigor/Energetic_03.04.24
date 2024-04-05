package ru.slitigor.energetic.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import ru.slitigor.energetic.dto.SubstationDto;
import ru.slitigor.energetic.mapper.SubstationMapper;
import ru.slitigor.energetic.model.Substation;
import ru.slitigor.energetic.service.SubstationService;
import ru.slitigor.energetic.utils.ErrorMessageBuilder;
import ru.slitigor.energetic.utils.ValidationException;
import ru.slitigor.energetic.utils.validator.SubstationValidator;

import java.util.List;

@RestController
@RequestMapping("/substation")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174", "http://localhost:3000"})
public class SubstationController {
    private final SubstationService service;
    private final SubstationMapper mapper;
    private final SubstationValidator validator;

    @GetMapping
    public ResponseEntity<List<SubstationDto>> getAllSubstation() {
        List<SubstationDto> substation = service.getAllSubstation().stream()
                .map(mapper::convertToSubstationDto).toList();
        return new ResponseEntity<>(substation, HttpStatus.OK);
    }

    @GetMapping("/{name}")
    public ResponseEntity<SubstationDto> getSubstationByName(@PathVariable("name") String name) {
       return new ResponseEntity<>(mapper.convertToSubstationDto(service.getSubstationByName(name)),
               HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<SubstationDto> createSubstation(@RequestBody @Valid SubstationDto substationDto,
                                                          BindingResult bindingResult) {
        Substation substationToCreate = mapper.convertToSubstation(substationDto);
        validator.validate(substationToCreate, bindingResult);
        if (bindingResult.hasErrors()) throw new ValidationException(ErrorMessageBuilder
                .getErrorMessageToClient(bindingResult));
        service.createSubstation(substationToCreate);

        return new ResponseEntity<>(mapper.convertToSubstationDto(substationToCreate), HttpStatus.CREATED);
    }

    @PutMapping("/{name}")
    public ResponseEntity<SubstationDto> updateSubstation(@PathVariable("name") String name,
                                                          @RequestBody @Valid SubstationDto substationDto,
                                                          BindingResult bindingResult) {
        if (bindingResult.hasErrors()) throw new ValidationException(ErrorMessageBuilder
                .getErrorMessageToClient(bindingResult));
        service.updateSubstation(name, mapper.convertToSubstation(substationDto));

        return new ResponseEntity<>(substationDto, HttpStatus.OK);
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<String> deleteSubstation(@PathVariable("name") String name) {
        service.deleteSubstation(name);
        return new ResponseEntity<>(String.format(
                "The substation with the name '%s' has been deleted from the database.", name),
                HttpStatus.OK);
    }
}
