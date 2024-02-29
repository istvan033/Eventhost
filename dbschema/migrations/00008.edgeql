CREATE MIGRATION m135zeks5pvrzp6cmzcaknm3ig2tjgrenkbwygxjyvlbrvwfmfonaq
    ONTO m1jgywgxqzjyapf65oimcjid5lmcstkjmofie44qysnugd4dw3zqkq
{
  ALTER TYPE default::User {
      ALTER PROPERTY email {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
