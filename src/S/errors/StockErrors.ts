import { StockErrorMessages } from "../enums/StockErrorMessages";

export class StockErrors extends Error {
  constructor(message: StockErrorMessages) {
    super(message);
  }
}
