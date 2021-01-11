package domain;

public class Board {
    private Cell[][] board;

    public Board(Cell[][] board) {
        this.board = board;
    }

    public Board nextState() {
        int boardLength = board.length;

        Cell[][] nextBoard = new Cell[boardLength][boardLength];

        for (int xIndex = 0; xIndex < boardLength; xIndex++) {
            for (int yIndex = 0; yIndex < boardLength; yIndex++) {
                int aliveNeighbours = countAliveNeighbours(xIndex, yIndex);
                nextBoard[xIndex][yIndex] = board[xIndex][yIndex].nextState(aliveNeighbours);
            }
        }

        return new Board(nextBoard);
    }

    private int countAliveNeighbours(int x, int y) {
        int count = 0;
        for (int xIndex = -1; xIndex <= 1; xIndex++) {
            for (int yIndex = -1; yIndex <= 1; yIndex++) {
                boolean indexIsInBoardBounds = x + xIndex >= 0 && x + xIndex < board.length && y + yIndex >= 0 && y + yIndex < board.length;
                if (indexIsInBoardBounds) {
                    count += aliveValue(x + xIndex, y + yIndex);
                }
            }
        }
        count -= aliveValue(x, y);
        return count;
    }

    private int aliveValue(int x, int y) {
        return board[x][y].isAlive() ? 1 : 0;
    }

    public Cell[][] getBoard() {
        return board;
    }
}
