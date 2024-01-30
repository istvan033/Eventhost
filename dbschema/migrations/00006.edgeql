CREATE MIGRATION m1j5cnmsla6r5vf4ir2ed3xvtylxu7iyy7lnceur5wneywvg7em3wq
    ONTO m1ajbghe2jysytiyf57idiuliz3zielqo22652ieimai7l5d64euka
{
  ALTER TYPE default::Event {
      DROP PROPERTY ordinalNumberCounter;
  };
  ALTER TYPE default::LinkOpen {
      ALTER LINK ticket {
          RENAME TO tickets;
      };
  };
  ALTER TYPE default::Scan {
      ALTER LINK user {
          RENAME TO users;
      };
  };
  ALTER TYPE default::Ticket {
      ALTER LINK event {
          RESET readonly;
      };
      CREATE REQUIRED PROPERTY fullName: std::str {
          SET REQUIRED USING (<std::str>{});
      };
      ALTER PROPERTY inviteCode {
          SET REQUIRED USING (<std::str>{});
      };
      ALTER PROPERTY token {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
