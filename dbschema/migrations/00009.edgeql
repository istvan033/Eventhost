CREATE MIGRATION m15sapsc5u6pbvrzszbxcpxe5sncj3fh5fbebgrvtnsee7kxbr3z4q
    ONTO m1xmf5kbwbop737jmdizjgs32afrxrmt7nqwryb7m7bo6iomocq3pq
{
  ALTER TYPE default::Event {
      DROP CONSTRAINT std::expression ON ((.startsAt < .endsAt));
      DROP PROPERTY endsAt;
      DROP PROPERTY startsAt;
  };
};
