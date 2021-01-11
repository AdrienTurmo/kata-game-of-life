package fr.turmo.gameOfLife.application;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
@RequestMapping("/board")
public class BoardResources {

    @GetMapping("/new")
    public BoardDto newBoard() {
        CellDto[][] board = new CellDto[100][100];
        CellDto[] emptyLine = new CellDto[100];
        Arrays.fill(emptyLine, new CellDto(false));
        Arrays.fill(board, emptyLine);
        return new BoardDto(board);
    }

}
