export interface BookingModel {
  id?: number | string | undefined;
  firstname?: string | undefined;
  lastname?: string | undefined;
  totalprice?: number | string | undefined;
  depositpaid?: boolean | string | undefined;
  bookingdates?: {
    checkin?: string | number | undefined;
    checkout?: string | number | undefined;
  };
  additionalneeds?: string | undefined;
}
