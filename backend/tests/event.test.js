const mongoose = require('mongoose');
const Event = require('../models/eventModel');
const eventController = require('../controllers/eventController');

describe('Event Test', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb+srv://bobopelloye:AxI62r7y1xAYz8EI@events.cup2rqr.mongodb.net/test?retryWrites=true&w=majority', 
    {
       useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
  });

  afterAll(async () => {
    // await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  describe('addEvent', () => {
    it('Test un ajout un evenement', async () => {
      const req = {
        body: {
          name: 'un evenement test',
          description: 'une description event',
          startDate: "2023-04-28",
          endDate: "2023-04-29",
          timezone: 'UTC'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      await eventController.addEvent(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe('getAllEvents', () => {
    it('Test pour la liste des evenements', async () => {
      const event1 = new Event({
        name: 'Event 1',
        description: 'description 1',
        startDate: "2023-04-28",
        endDate: "2023-04-29",
        timezone: 'UTC',
      });
      const event2 = new Event({
        name: 'Event 2',
        description: 'description 2',
        startDate: "2023-04-28",
        endDate: "2023-04-29",
        timezone: 'UTC'
      });
      await event1.save();
      await event2.save();
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      await eventController.getAllEvents(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });
});
