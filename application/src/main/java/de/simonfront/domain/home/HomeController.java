package de.simonfront.domain.home;

import org.slf4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static de.simonfront.infrastructure.KonvolutDbConstants.HOME_URI;
import static org.slf4j.LoggerFactory.getLogger;
import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping(path = HOME_URI)
public class HomeController {

    private static Logger LOGGER = getLogger(HomeController.class);

    @RequestMapping(method = GET, path = "/{name}")
    @ResponseBody
    public String sayHello(@PathVariable String name) {
        LOGGER.info("Logging for name: " + name);
        return "hallo " + name;
    }
}
