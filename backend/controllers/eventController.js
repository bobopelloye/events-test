const Event = require('../models/eventModel');
const validator = require('../utils/validators')
const _ = require('lodash');
const addEvent = async (req, res) => {
  try {

    const { name, description, startDate, endDate, timezone } = req.body;
    const isDateValid = validator.validateDates(startDate, endDate);

     if (!isDateValid) {
            return res.status(500).json({
                message: 'la date de fin doit etre apres la date de debut!',
            });
        }
        const newEvent = new Event({
        name,
        description,
        startDate,
        endDate,
        timezone
        });
        await newEvent.save();
        const event = await Event.findById(newEvent._id).select('name description startDate endDate timezone');
        return res.status(201).json({
        message: 'L\'événement a été ajouté avec succès!',
        event: _.omit(event.toObject(), ['_id'])
    });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addEvent, getAllEvents };
