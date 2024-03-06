CREATE MIGRATION m1riuc7cjthykdfbih7hl5tkkqdlxdyzkicjbukjq24miabaeynvwq
    ONTO m1cjedl7x65qigodomebndfm55tpdo7aatsll5t356v2o4l52ntzka
{
  ALTER TYPE default::Organizer {
      CREATE REQUIRED PROPERTY organizerCode: std::str {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
