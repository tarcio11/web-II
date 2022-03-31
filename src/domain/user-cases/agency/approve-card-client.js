const { Cards } = require('../../entities/cards');
const { Account } = require('../../entities/account');

const approveCardClientService = async ({ card_id, account_id, agencyId, status }) => {
  const card = await Cards.findOne({ where: { id: card_id }});

  if (!card) {
    throw new Error('Card not found');
  }

  const account = await Account.findOne({ where: { id: account_id }});

  if (!account) {
    throw new Error('Account not found');
  }

  if (account.agency_id !== Number(agencyId)) {
    throw new Error('Not allowed to approve this card'); // sem permissão
  }

  if (card.status) {
    throw new Error('Card already approved'); // ja foi aprovado
  }

  card.status = status;

  await card.save();
}

module.exports = { approveCardClientService };