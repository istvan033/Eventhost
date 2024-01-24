CREATE MIGRATION m13piqsviop3tlflyuuhfmkaj2kxjf7sfwkczqe3elh3xnftpotd7q
    ONTO m1zrfuavw3t33djp5dsc3yr3bny6jdelcm7bhkjxblksk2boscd6qa
{
  ALTER TYPE default::Ticket {
      CREATE REQUIRED LINK events: default::Event {
          SET readonly := true;
          SET REQUIRED USING (<default::Event>{});
      };
  };
  ALTER TYPE default::Event {
      ALTER LINK tickets {
          USING (.<events[IS default::Ticket]);
          DROP CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY ordinalNumberCounter: std::int64 {
          SET default := 0;
      };
  };
};
