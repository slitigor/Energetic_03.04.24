package ru.slitigor.energetic.service;

import ru.slitigor.energetic.model.Substation;

import java.util.List;

public interface SubstationService {
    Substation getSubstationByName(String name);
    List<Substation> getAllSubstation();
    Substation createSubstation(Substation substation);
    Substation updateSubstation(String name, Substation substation);
    void deleteSubstation(String name);
}
