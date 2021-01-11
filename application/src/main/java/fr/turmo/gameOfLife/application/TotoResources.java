package fr.turmo.gameOfLife.application;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TotoResources {

    @GetMapping("/toto")
    public String getToto() {
        return "toto";
    }
}
