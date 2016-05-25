package de.simonfront.domain.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SpielModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int pkid;
    private String ean;
    private String name;
    private String description;

    protected SpielModel() {
    }

    public SpielModel(String name, String description, String ean) {
        this.name = name;
        this.description = description;
        this.ean = ean;
    }

    @Override
    public String toString() {
        return String.format(
                "SpielModel[pkid=%d, ean='%s' name='%s', description='%s']",
                pkid, ean, name, description);
    }

    public String getEan() {
        return ean;
    }

    public void setEan(String ean) {
        this.ean = ean;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}