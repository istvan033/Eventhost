CREATE MIGRATION m1ajbghe2jysytiyf57idiuliz3zielqo22652ieimai7l5d64euka
    ONTO m13piqsviop3tlflyuuhfmkaj2kxjf7sfwkczqe3elh3xnftpotd7q
{
  ALTER TYPE default::Ticket {
      ALTER LINK events {
          RENAME TO event;
      };
  };
  ALTER TYPE default::Organizer {
      ALTER LINK events {
          RENAME TO event;
      };
  };
};
