package fr.turmo.gameOfLife.application;

public class BoardDto {
    private CellDto[][] board;

    public BoardDto(CellDto[][] board) {
        this.board = board;
    }

    public CellDto[][] getBoard() {
        return board;
    }
}
