﻿JSIL.MakeClass("System.Object", "JSIL.Reference", true, [], function ($) {
    var types = {};

    $.SetValue("__IsReference__", true);

    var checkType = function Reference_CheckType(value) {
        var type = this;

        var isReference = JSIL.Reference.$Is(value, true);
        if (!isReference)
            return false;

        var typeProto = Object.getPrototypeOf(type);
        if (
          (typeProto === JSIL.GenericParameter.prototype) ||
          (typeProto === JSIL.PositionalGenericParameter.prototype)
        ) {
            return true;
        }

        var refValue = value.get();

        if ((type.__IsReferenceType__) && (refValue === null))
            return true;

        return type.$Is(refValue, false);
    };

    var of = function Reference_Of(type) {
        if (typeof (type) === "undefined")
            JSIL.RuntimeError("Undefined reference type");

        var typeObject = JSIL.ResolveTypeReference(type)[1];

        var elementName = JSIL.GetTypeName(typeObject);
        var compositePublicInterface = types[elementName];

        if (typeof (compositePublicInterface) === "undefined") {
            var typeName = "ref " + elementName;

            var compositeTypeObject = JSIL.CreateDictionaryObject($.Type);
            compositePublicInterface = JSIL.CreateDictionaryObject(JSIL.Reference);

            JSIL.SetValueProperty(compositePublicInterface, "__Type__", compositeTypeObject);
            JSIL.SetValueProperty(compositeTypeObject, "__PublicInterface__", compositePublicInterface);

            compositeTypeObject.__IsByRef__ = true;
            compositeTypeObject.__ReferentType__ = type;

            var toStringImpl = function (context) {
                return "ref " + typeObject.toString(context);
            };

            compositePublicInterface.prototype = JSIL.MakeProto(JSIL.Reference, compositeTypeObject, typeName, true, typeObject.__Context__);

            JSIL.SetValueProperty(compositePublicInterface, "CheckType", checkType.bind(type));

            JSIL.SetValueProperty(compositePublicInterface, "toString", function ReferencePublicInterface_ToString() {
                return "<JSIL.Reference.Of(" + typeObject.toString() + ") Public Interface>";
            });
            JSIL.SetValueProperty(compositePublicInterface.prototype, "toString", toStringImpl);
            JSIL.SetValueProperty(compositeTypeObject, "toString", toStringImpl);

            JSIL.SetValueProperty(compositePublicInterface, "__FullName__", typeName);
            JSIL.SetValueProperty(compositeTypeObject, "__FullName__", typeName);

            JSIL.SetTypeId(
              compositePublicInterface, compositeTypeObject, (
                $.Type.__TypeId__ + "[" + JSIL.HashTypeArgumentArray([typeObject], typeObject.__Context__) + "]"
              )
            );

            JSIL.MakeCastMethods(
              compositePublicInterface, compositeTypeObject, "reference"
            );

            types[elementName] = compositePublicInterface;
        }

        return compositePublicInterface;
    };

    $.RawMethod(true, "Of$NoInitialize", of);
    $.RawMethod(true, "Of", of);

    $.RawMethod(false, "get_value",
      function Reference_GetValue() {
          JSIL.RuntimeError("Use of old-style reference.value");
      }
    );

    $.RawMethod(false, "set_value",
      function Reference_SetValue(value) {
          JSIL.RuntimeError("Use of old-style reference.value = x");
      }
    );

    $.Property({ Static: false, Public: true }, "value");
});