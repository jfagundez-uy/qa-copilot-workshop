import { BookingService } from "../../models/services/BookingService.js";
import { BookingModel } from "../../models/request/BookingModel";
import "chai/register-should.js";

describe("Update Booking", () => {
  const bookingService = new BookingService();

  before(async () => {
    await bookingService.authenticate();
  });

  it("@Smoke - Update Booking successfully - 200", async () => {
    const booking: BookingModel = {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: false,
      bookingdates: {
        checkin: "2020-01-01",
        checkout: "2021-01-01",
      },
      additionalneeds: "Lunch",
    };

    const response = await bookingService.updateBooking<BookingModel>(1234, booking);

    response.status.should.equal(200, JSON.stringify(response.data));
    response.data.firstname?.should.equal(booking.firstname);
    response.data.lastname?.should.equal(booking.lastname);
    response.data.totalprice?.should.equal(booking.totalprice);
    response.data.depositpaid?.should.be.false;
    response.data.bookingdates?.checkin?.should.equal(booking.bookingdates?.checkin);
    response.data.bookingdates?.checkout?.should.equal(booking.bookingdates?.checkout);
    response.data.additionalneeds?.should.equal(booking.additionalneeds);
  });
});
