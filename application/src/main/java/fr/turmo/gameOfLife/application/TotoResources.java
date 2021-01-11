package fr.turmo.gameOfLife.application;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/toto")
public class TotoResources {

    @GetMapping
    public String getToto() {
        return "toto";
    }
}
