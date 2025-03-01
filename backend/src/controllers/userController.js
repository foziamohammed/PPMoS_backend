const axios = require('axios');

const updateUser = async (req, res) => {
    const { ...attributes } = req.body;
    const user = req.user;

    try {
        const response = await axios.put('http://localhost:9000/api/user/update', { attributes, user });

        if (response.status === 200) {
            res.status(200).json({
                message: 'Update successful!',
                data: response.data
            });
        } else {
            res.status(400).json({ message: 'Update failed' });
        }
    } catch (error) {
        console.error('Error during update:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { updateUser };