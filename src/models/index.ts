export interface RequestDto {
  id: string;
  type: string;
  creatorId: string;
  originCity: string;
  targetCity: string;
  parcelType: string;
  description: string;
  dispatchDate: number;
  creationDate: number;
}
