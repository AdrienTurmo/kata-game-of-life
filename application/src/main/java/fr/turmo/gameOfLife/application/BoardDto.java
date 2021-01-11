package fr.turmo.gameOfLife.application;

import com.fasterxml.jackson.annotation.JsonCreator;

public class BoardDto {
    private CellDto[][] board;

    @JsonCreator
    public BoardDto(CellDto[][] board) {
        this.board = board;
    }

    public CellDto[][] getBoard() {
        return board;
    }
}
