package ru.slitigor.energetic.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true, nullable = false, columnDefinition = "VARCHAR(6)")
    private String zip;
    @Column(columnDefinition = "VARCHAR(50)")
    private String city;
    @Column(columnDefinition = "VARCHAR(60)")
    private String street;
    @OneToOne(mappedBy = "address")
    private District district;
}
