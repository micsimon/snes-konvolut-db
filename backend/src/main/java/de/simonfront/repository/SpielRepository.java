package de.simonfront.repository;

import de.simonfront.domain.model.SpielModel;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface SpielRepository extends CrudRepository<SpielModel, Integer> {
    //TODO Camelcase
// TODO Rename ohne präfix
    List<SpielModel> findByEan(String ean);

    List<SpielModel> findByName(String name);

    List<SpielModel> findByDescription(String description);
}
