CREATE MIGRATION m1xmf5kbwbop737jmdizjgs32afrxrmt7nqwryb7m7bo6iomocq3pq
    ONTO m1egnpjkze2z6uf5wkhz426oh7xxvrmnxuukw4sovy536rcx475tva
{
  ALTER TYPE default::Event {
      CREATE PROPERTY endsAt: cal::local_date;
      CREATE PROPERTY startsAt: cal::local_date;
      CREATE CONSTRAINT std::expression ON ((.startsAt < .endsAt));
  };
};
