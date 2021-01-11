package fr.turmo.gameOfLife.application;

import fr.turmo.gameOfLife.domain.Board;
import fr.turmo.gameOfLife.domain.Cell;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping(value = "/nextState", consumes = "application/json", produces = "application/json")
    public Board nextState(@RequestBody BoardDto boardDto) {
        CellDto[][] board = boardDto.getBoard();
        Cell[][] toto = new Cell[board.length][board[0].length];
        for (int rowIndex = 0; rowIndex < board.length; rowIndex++) {
            for (int colIndex = 0; colIndex < board[0].length; colIndex++) {
                toto[rowIndex][colIndex] = board[rowIndex][colIndex].isAlive() ? Cell.aliveCell() : Cell.deadCell();
            }
        }
        return new Board(toto).nextState();
    }

}
