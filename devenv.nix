{ pkgs, ... }:

{
  packages = [ pkgs.nodejs_24 ];

  scripts = {
    dev.exec = "npm run dev";
    build.exec = "npm run build";
    check.exec = "npm run check";
  };
}
