CREATE MIGRATION m1a5tgkwpzzj7q43zh5po2vpxbegrenqzqdz4fskr2sl33vtbtnsma
    ONTO m15sapsc5u6pbvrzszbxcpxe5sncj3fh5fbebgrvtnsee7kxbr3z4q
{
  ALTER TYPE default::Event {
      CREATE PROPERTY endsAt: std::datetime;
      CREATE PROPERTY startsAt: std::datetime;
      CREATE CONSTRAINT std::expression ON ((.startsAt < .endsAt));
  };
};
