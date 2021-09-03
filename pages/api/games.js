// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {

  let games = {
    games: "a"
  }

  res.status(200).json(games)
}
