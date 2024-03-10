CREATE MIGRATION m1egnpjkze2z6uf5wkhz426oh7xxvrmnxuukw4sovy536rcx475tva
    ONTO m1km7ogyljk37cu4mlun3nhpq2xq544onftadmlajcmmps6dzdjjsq
{
  ALTER TYPE default::Event {
      DROP CONSTRAINT std::expression ON ((.startsAt < .endsAt));
      DROP PROPERTY endsAt;
      DROP PROPERTY etel;
      DROP PROPERTY startsAt;
  };
};
