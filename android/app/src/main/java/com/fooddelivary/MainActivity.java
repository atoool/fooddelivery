package com.fooddelivary;

import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "fooddelivary";
  }

  @Override
protected void onCreate(Bundle state){
    super.onCreate(state);

    SharedPreferences preferences =
        PreferenceManager.getDefaultSharedPreferences(getApplicationContext());
preferences.edit().putString("debug_http_host", "192.168.10.9:8081").apply();
}

}
