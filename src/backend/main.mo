import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  let projectMap = Map.empty<Text, Text>();

  public shared ({ caller }) func setCanisterId(canisterId : Text) : async () {
    projectMap.add(caller.toText(), canisterId);
  };

  public query ({ caller }) func getCanisterId() : async Text {
    switch (projectMap.get(caller.toText())) {
      case (null) { Runtime.trap("Canister ID has not been set yet. ") };
      case (?canisterId) { canisterId };
    };
  };
};
