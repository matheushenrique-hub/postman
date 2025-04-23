
if (pm.iterationData.has("email") && pm.iterationData.has("password")) {
    pm.request.body.raw = {
        email: pm.iterationData.get("email"),
        password: pm.iterationData.get("password")
    };
}
if (pm.iterationData.has("baseUrl") && pm.iterationData.has("endpoint")) {
    pm.environment.set("baseUrl", pm.iterationData.get("baseUrl"));
    pm.environment.set("endpoint", pm.iterationData.get("endpoint"));
}