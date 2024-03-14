CREATE MIGRATION m1lebqspifgzmmkq6qq5r3bbid6p5i3ogkbgrwyultzilvnbvhecxa
    ONTO m1a5tgkwpzzj7q43zh5po2vpxbegrenqzqdz4fskr2sl33vtbtnsma
{
  ALTER TYPE default::Event {
      CREATE PROPERTY startsAtHour: std::str {
          CREATE CONSTRAINT std::regexp('^(0?[0-9]|1[0-9]|2[0-4]):[0-5][0-9]$');
      };
  };
  CREATE TYPE default::companyNews EXTENDING default::HasTimestamps {
      CREATE PROPERTY description: std::str;
      CREATE PROPERTY title: std::str;
  };
};
