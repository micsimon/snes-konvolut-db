package de.simonfront.domain.spiel;

import de.simonfront.domain.model.SpielModel;
import de.simonfront.repository.SpielRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

import static de.simonfront.infrastructure.KonvolutDbConstants.SPIEL_URI;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping(path = SPIEL_URI)
public class SpielController {

    @Autowired
    SpielRepository repository;

    @RequestMapping(method = GET)
    @ResponseBody  // JSON
    public List<SpielModel> getAlleSpiele() {
        // todo noch mehr abstrahieren ... in Service auslagern
        return repository.findAll();
    }
}
