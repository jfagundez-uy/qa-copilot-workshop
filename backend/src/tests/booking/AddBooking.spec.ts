import { BookingService } from "../../models/services/BookingService.js";
import { BookingModel } from "../../models/request/BookingModel";
import "chai/register-should.js";

describe("Add Booking", () => {
  const bookingService = new BookingService();

  it("@Smoke - Add Booking Successfully", async () => {
    const booking: BookingModel = {
      firstname: "Jim",
      lastname: "Draper",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-01-01",
        checkout: "2025-01-01",
      },
      additionalneeds: "Breakfast",
    };

    const response = await bookingService.addBooking(booking);

    console.log(response);
  });
});
