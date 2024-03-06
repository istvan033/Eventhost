CREATE MIGRATION m1dpkfn2dyagw6aursfowlpkqotlhnipedqg23pcmzqoktbf5slaxq
    ONTO m1riuc7cjthykdfbih7hl5tkkqdlxdyzkicjbukjq24miabaeynvwq
{
  ALTER TYPE default::User {
      CREATE PROPERTY organizerCode: std::str;
  };
};
