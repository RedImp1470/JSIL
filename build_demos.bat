del /s/q jsil.org\demos\*.js
title Building Game Type
bin\JSILc "C:\Game Design\Game Type\CodeNew\GameType\GameType.sln" "jsil.org\demos\GameType\GameType.jsilconfig" --platform:x86 --configuration:Debug
title Building Bytown Lumberjack
bin\JSILc "C:\Users\Kevin\Documents\Projects\lumberjack\LumberjackPC.sln" "C:\Users\Kevin\Documents\Projects\lumberjack\Lumberjack\Lumberjack\bin\x86\Debug\Lumberjack.XmlSerializers.dll" "jsil.org\demos\Lumberjack\Lumberjack.jsilconfig" --platform:x86 --configuration:Debug
title Building Raytracer
bin\JSILc "Examples\SimpleRaytracer.sln"
title Building Pathtracer
bin\JSILc "Examples\SimplePathtracer.sln"
title Building Mannux
bin\JSILc "C:\Users\Kevin\Documents\Projects\XnaMannux\Mannux\Mannux.sln" "jsil.org\demos\Mannux\Mannux.jsilconfig" --platform=x86 --configuration=Debug
title Building Tetris
bin\JSILc "Examples\ThirdParty\Tetris\tetris.sln" "jsil.org\demos\Tetris\Tetris.jsilconfig" --platform=x86 --configuration=Debug
title Building Platformer Starter Kit
bin\JSILc "C:\Users\Kevin\Documents\Projects\PlatformerStarterKit\PlatformerStarterKit.sln" "jsil.org\demos\Platformer\Platformer.jsilconfig" --platform=x86 --configuration=Debug
title Building RPG Starter Kit
bin\JSILc "C:\Users\Kevin\Documents\Projects\RPGStarterKit\RolePlayingGameWindows.sln" "C:\Users\Kevin\Documents\Projects\RPGStarterKit\RolePlayingGame\bin\x86\Debug\RolePlayingGame.XmlSerializers.dll" "jsil.org\demos\RPG\RPG.jsilconfig" --platform="Mixed Platforms" --configuration=Debug