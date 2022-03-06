const { createClient } = require("@supabase/supabase-js");

const NODE__ENV = process.env.NODE_ENV || "development";
require("dotenv").config({
  path: `.env.${NODE__ENV}`,
});

const supabase = createClient(process.env.BASE__SUPABASE, process.env.KEY__SUPABASE);

module.exports = supabase;
