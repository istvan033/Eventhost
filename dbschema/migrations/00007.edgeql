CREATE MIGRATION m1jgywgxqzjyapf65oimcjid5lmcstkjmofie44qysnugd4dw3zqkq
    ONTO m1j5cnmsla6r5vf4ir2ed3xvtylxu7iyy7lnceur5wneywvg7em3wq
{
  ALTER TYPE default::Organizer {
      DROP LINK users;
  };
  ALTER TYPE default::Organizer {
      CREATE REQUIRED PROPERTY employeeEmail: std::str {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
