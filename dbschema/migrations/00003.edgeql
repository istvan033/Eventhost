CREATE MIGRATION m1cjedl7x65qigodomebndfm55tpdo7aatsll5t356v2o4l52ntzka
    ONTO m12cpoyumav7enegbws63wowrqpow4b6vd4thi6aw3x7jd7whikkna
{
  ALTER TYPE default::Company {
      CREATE REQUIRED PROPERTY organizerCode: std::str {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
