import VectorDB from "@themaximalist/vectordb.js";

let db = new VectorDB({
  dimensions: 1536,
  embeddings: {
    service: "openai",
  },
});

export const query = async (text) => {
  db = new VectorDB({
    dimensions: 1536,
    embeddings: {
      service: "openai",
    },
  });

  console.log("DB reset");

  await db.add(
    "Lists name first, name last, booking and entry status, from the booking table filtered by status ",
    {
      description: "",
      variables: ["status"],
      sql: `SELECT Entry.Namefirst, Entry.NameLast, Booking.BookingID, Booking.EntryStatusEnum
          FROM Entry JOIN Booking 
          WHERE Booking.EntryStatusEnum = '{{ status }}'`,
    }
  );

  const results = await db.search("booking", 4);

  console.dir(results);
};
