package ru.slitigor.energetic.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubstationDto {
    private String name;
    private String psSchema;
    private DistrictDto district;
}
