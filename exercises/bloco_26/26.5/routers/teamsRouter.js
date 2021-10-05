const router = require('express').Router();
const fs = require('fs').promises;

const {
  isValidName,
  isValidInitial,
  isValidCountry,
} = require('../middlewares.js/validations');

const validate = [isValidName, isValidInitial, isValidCountry];

const getTeams = async () => {
  const teams = await fs.readFile('./teams.json', 'utf-8');
  const result = await JSON.parse(teams);
  return result
}

router.post('/', validate, async (req, res) => {
  const { name, initials, country, league } = req.body;
  const teamsContent = await getTeams();
  // if (!teamsContent) {
  //   await fs.writeFile('teams.json', JSON.stringify({ name, initials, country, league }));
  // } else {
    teamsContent.push({ name, initials, country, league });
    await fs.writeFile('teams.json', JSON.stringify(teamsContent));
  // }

  res.status(200).json({ message: { name, initials, country, league } })
});

router.get('/', async (_req, res) => {
  const result = await getTeams();
  res.status(200).json({ message: result })
});

module.exports = router;
