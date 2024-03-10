CREATE MIGRATION m1km7ogyljk37cu4mlun3nhpq2xq544onftadmlajcmmps6dzdjjsq
    ONTO m1dpkfn2dyagw6aursfowlpkqotlhnipedqg23pcmzqoktbf5slaxq
{
  ALTER TYPE default::Event {
      CREATE PROPERTY etel: cal::local_date;
  };
};
