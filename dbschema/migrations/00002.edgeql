CREATE MIGRATION m1osbs3st2ow5yrbefb75j4jy7powlchsearworxbkrw7km4igeryq
    ONTO m1j5eh5p5umq36ry66t2rsoil7dde5uvjjfnlfacur4iz537cjee3a
{
  ALTER TYPE default::Organizer {
      ALTER PROPERTY euTaxNumber {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY taxNumber {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY website {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::Ticket {
      CREATE LINK events := (.<tickets[IS default::Event]);
      ALTER PROPERTY gdprAccepted {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY newsletterSubscribed {
          RESET OPTIONALITY;
      };
  };
};
