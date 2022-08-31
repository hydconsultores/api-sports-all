import { MoreThan, MoreThanOrEqual, LessThan, LessThanOrEqual } from "typeorm";
import { format } from "date-fns";

// TypeORM query operators polyfills
enum EDateType {
  Date = "yyyy-MM-dd",
  Datetime = "yyyy-MM-dd HH:mm:ss"
};

const MoreThanDate = (date: Date, type: EDateType) => MoreThan(format(date, type));
const MoreThanOrEqualDate = (date: Date, type: EDateType) => MoreThanOrEqual(format(date, type));
const LessThanDate = (date: Date, type: EDateType) => LessThan(format(date, type));
const LessThanOrEqualDate = (date: Date, type: EDateType) => LessThanOrEqual(format(date, type));

export { MoreThanDate, MoreThanOrEqualDate, LessThanDate, LessThanOrEqualDate, EDateType };