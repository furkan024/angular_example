import { IEnumerable } from "ts-generic-collections-linq";
import { students } from "./students";

export class studentsGrouped
{
  groupedList: IEnumerable<students>;
  constructor(groupedList: IEnumerable<students>) {
    this.groupedList = groupedList;
}

}
