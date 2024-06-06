const Content = require('../models/Content');

exports.getContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createContent = async (req, res) => {
  const { title, description, contentUrl } = req.body;

  try {
    const content = new Content({
      title,
      description,
      contentUrl,
      createdBy: req.user._id
    });

    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateContent = async (req, res) => {
  const { id } = req.params;
  const { title, description, contentUrl } = req.body;

  try {
    const content = await Content.findById(id);

    if (content) {
      content.title = title;
      content.description = description;
      content.contentUrl = contentUrl;

      await content.save();
      res.json(content);
    } else {
      
        res.status(404).json({ message: 'Content not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.deleteContent = async (req, res) => {
    const { id } = req.params;
  
    try {
      const content = await Content.findById(id);
  
      if (content) {
        await content.remove();
        res.json({ message: 'Content removed' });
      } else {
        res.status(404).json({ message: 'Content not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
