package fr.turmo.gameOfLife.application;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/board")
public class BoardResources {

    @GetMapping("/new")
    public BoardDto newBoard() {
        return new BoardDto(
                new CellDto[][]{
                        {new CellDto(false), new CellDto(false), new CellDto(false)},
                        {new CellDto(false), new CellDto(true), new CellDto(false)},
                        {new CellDto(false), new CellDto(false), new CellDto(false)}
                }
        );
    }

}
