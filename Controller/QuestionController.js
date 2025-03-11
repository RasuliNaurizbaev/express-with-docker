class QuestionController {
    static howAreYou(req, res) {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ error: "Question is required!" });
        }

        res.status(200).json({ userQuestion: question });
    }
}

module.exports = QuestionController;
